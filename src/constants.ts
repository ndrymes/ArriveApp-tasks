const PASSIONLEVEL = {
    low: 'LOW',
    medium: 'MEDIUM',
    high: 'HIGH',
    very_high: 'VERY-HIGH',
  };
  const PASSIONLEVELVALUE = Object.values(PASSIONLEVEL);
  const PASSIONLEVELKEYS = Object.keys(PASSIONLEVEL);
  
  const ROUTES = {
    VERSIONS: {
      V1: '/v1',
    },
    PATHS: {
      HOBBIES: '/hobbies',
      USERS: '/users',
    },
    PARAMETERS: { HOBBIES: 'hobbiesId', USER: 'userId' }, // the parameters will contain values passed as part of the api or query params e.g. :someId
  };
  export default {
    PASSIONLEVEL,
    PASSIONLEVELVALUE,
    PASSIONLEVELKEYS,
    ROUTES,
  };
  