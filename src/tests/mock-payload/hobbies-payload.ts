const MockHobbiesRequestPayload = {
    name: 'travelling',
    passionLevel: 'high',
    year: '1991',
  };
  
  const MockHobbiesResponsePayload = {
    _id: '61136f57a3190a0821361e24',
    name: 'travelling',
    passionLevel: 'HIGH',
    year: '1991-01-01T00:00:00.000Z',
    createdAt: '2021-08-11T06:33:59.136Z',
    updatedAt: '2021-08-11T06:33:59.136Z',
    __v: 0,
  };
  
  const MockUserRequestPayload = {
    name: 'Wolex',
  };
  
  const MockUserResponseload = {
    name: 'travelling',
    hobbies: ['Dsss'],
  };
  // We need to keep the values constant, making a clone will be the only way to modify the values here
  Object.freeze(MockHobbiesRequestPayload);
  Object.freeze(MockHobbiesResponsePayload);
  
  export const payload = {
    MockHobbiesRequestPayload,
    MockUserRequestPayload,
    MockUserResponseload,
    MockHobbiesResponsePayload,
  };
  