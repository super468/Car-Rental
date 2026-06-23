var crypto = require('crypto');

var stores = {};
var models = {};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function makeId() {
  return crypto.randomBytes(12).toString('hex');
}

function normalizeValue(value) {
  if (value === undefined || value === null) return value;
  return String(value);
}

function matchesCondition(value, condition) {
  if (condition && typeof condition === 'object' && !Array.isArray(condition)) {
    if (condition.$regex !== undefined) {
      var flags = condition.$options || '';
      var regex = new RegExp(condition.$regex, flags);
      return regex.test(normalizeValue(value) || '');
    }

    if (condition.$in !== undefined) {
      return condition.$in.map(normalizeValue).indexOf(normalizeValue(value)) !== -1;
    }

    if (condition.$gte !== undefined && Number(value) < Number(condition.$gte)) {
      return false;
    }

    if (condition.$lte !== undefined && Number(value) > Number(condition.$lte)) {
      return false;
    }

    return normalizeValue(value) === normalizeValue(condition);
  }

  return normalizeValue(value) === normalizeValue(condition);
}

function matches(doc, query) {
  if (!query || Object.keys(query).length === 0) return true;

  return Object.keys(query).every(function(key) {
    return matchesCondition(doc[key], query[key]);
  });
}

function queryResult(result) {
  return {
    exec: function(callback) {
      if (callback) callback(null, result);
      return Promise.resolve(result);
    }
  };
}

function seedIfNeeded(name, items) {
  stores[name] = stores[name] || [];
  if (stores[name].length === 0 && items && items.length) {
    stores[name] = items.map(function(item) {
      var copy = clone(item);
      copy._id = copy._id || makeId();
      return copy;
    });
  }
}

function createModel(name, schema) {
  stores[name] = stores[name] || [];

  function MemoryModel(data) {
    Object.assign(this, data || {});
    this._id = this._id || makeId();
  }

  if (schema && schema.methods) {
    Object.keys(schema.methods).forEach(function(methodName) {
      MemoryModel.prototype[methodName] = schema.methods[methodName];
    });
  }

  function hydrate(doc) {
    return doc ? new MemoryModel(clone(doc)) : null;
  }

  MemoryModel.find = function(query, callback) {
    if (typeof query === 'function') {
      callback = query;
      query = {};
    }

    var result = stores[name].filter(function(doc) {
      return matches(doc, query);
    }).map(hydrate);

    if (callback) callback(null, result);
    return queryResult(result);
  };

  MemoryModel.findOne = function(query, callback) {
    var found = stores[name].find(function(doc) {
      return matches(doc, query);
    }) || null;
    var result = hydrate(found);

    if (callback) callback(null, result);
    return queryResult(result);
  };

  MemoryModel.findById = function(id, callback) {
    var found = stores[name].find(function(doc) {
      return normalizeValue(doc._id) === normalizeValue(id);
    }) || null;
    var result = hydrate(found);

    if (callback) callback(null, result);
    return queryResult(result);
  };

  MemoryModel.update = function(query, update, callback) {
    var count = 0;
    stores[name].forEach(function(doc) {
      if (matches(doc, query)) {
        if (update && update.$set) {
          Object.assign(doc, update.$set);
        } else if (update) {
          Object.assign(doc, update);
        }
        count++;
      }
    });

    if (callback) callback(null, { n: count }, { ok: 1 });
    return Promise.resolve({ n: count, ok: 1 });
  };

  MemoryModel.remove = function(query, callback) {
    var before = stores[name].length;
    stores[name] = stores[name].filter(function(doc) {
      return !matches(doc, query);
    });
    var removed = before - stores[name].length;

    if (callback) callback(null, { n: removed });
    return Promise.resolve({ n: removed, ok: 1 });
  };

  MemoryModel.prototype.save = function(callback) {
    var data = clone(this);
    var index = stores[name].findIndex(function(doc) {
      return normalizeValue(doc._id) === normalizeValue(data._id);
    });

    if (index >= 0) {
      stores[name][index] = data;
    } else {
      stores[name].push(data);
    }

    if (callback) callback(null, this);
    return Promise.resolve(this);
  };

  models[name] = MemoryModel;
  return MemoryModel;
}

module.exports.install = function(mongoose) {
  var originalModel = mongoose.model.bind(mongoose);

  mongoose.model = function(name, schema) {
    if (schema) {
      return createModel(name, schema);
    }

    if (models[name]) return models[name];

    try {
      return originalModel(name);
    } catch (err) {
      return createModel(name);
    }
  };
};

var DEFAULT_CAR = {
  passengers: 5,
  luggage: 2,
  price: 40.00,
  ACsup: true,
  isAuto: true,
  isavailable: true,
  insurance: 10.00
};

function createCar(data) {
  return Object.assign({}, DEFAULT_CAR, data);
}

module.exports.seedCars = function seedCars() {
  seedIfNeeded('Cars', [
    createCar({
      name: 'Nissan Altima',
      type: 'Standard',
      imageName: '/assets/carimages/nissan_altima_standard_brl_287x164.jpg',
      pickupLoc: 'DALLAS LOVE FIELD - Dallas Love Field'
    }),

    createCar({
      name: 'Chevrolet Sonica',
      type: 'Economy',
      imageName: '/assets/carimages/chevrolet_sonic_economy_brl_287x164.jpg',
      pickupLoc: 'Plano high school'
    }),

    createCar({
      name: 'Chevrolet Cruze',
      type: 'Standard',
      imageName: '/assets/carimages/chevrolet_cruze_intermediate_brl_287x164.jpg',
      price: 60.00,
      pickupLoc: 'Richardison Bell street',
      insurance: 12.00
    }),

    createCar({
      name: 'Chevrolet Suburban',
      type: 'SUV',
      imageName: '/assets/carimages/chevrolet_suburban_suv_brl_287x164.jpg',
      passengers: 7,
      luggage: 3,
      price: 120.00,
      pickupLoc: 'UTD',
      insurance: 20.00
    }),

    createCar({
      name: 'Hrysler_300',
      type: 'Luxury',
      imageName: '/assets/carimages/chrysler_300_luxury_brl_287x164.jpg',
      luggage: 3,
      price: 210.00,
      pickupLoc: 'UTD',
      insurance: 30.00
    })
  ]);
};
