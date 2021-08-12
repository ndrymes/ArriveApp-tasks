import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import { appCore } from '../../app';
import { userRepository } from '../../repositories/index';
import { responseHelper } from '../../helpers';
import { payload } from '../mock-payload';
import constants from '../../constants';
const { ROUTES } = constants;
const { VERSIONS, PATHS } = ROUTES;
jest.mock('../../repositories/users.ts');

const mockHobbiesRepository = userRepository as jest.Mocked<
  typeof userRepository
>;

// Users Api test

/**
 * The api test for users record tests that when the route is called,
 * the correct response is returned and also that the correct status code is returned
 */

let app;
let server;
let requestTester;

describe(`POST ${VERSIONS.V1}${PATHS.HOBBIES}`, () => {
  beforeAll(async () => {
    app = await appCore();
    requestTester = request(app);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() =>
    mockHobbiesRepository.saveUsers.mockImplementation(jest.fn())
  );

  it('should respond with json containing a list of users records with the correct status code', async () => {
    // Arrange
    const api = `${VERSIONS.V1}${PATHS.USERS}`;

    mockHobbiesRepository.saveUsers.mockResolvedValue(
      payload.MockUserResponseload
    );

    // Act
    const apiResponse = await requestTester
      .post(api)
      .send(payload.MockUserRequestPayload);

    // Assert
    expect(apiResponse.statusCode).toBe(StatusCodes.OK);
    expect(apiResponse.body).toMatchObject({
      code: 0,
      msg: 'Success',
      users: payload.MockUserResponseload,
    });
  });

  it('should respond with json containing an error response with a 400 bad request status code due to empty request body', async () => {
    // Arrange
    const api = `${VERSIONS.V1}${PATHS.USERS}`;
    mockHobbiesRepository.saveUsers.mockResolvedValue(
      payload.MockUserResponseload
    );

    // Act
    const apiResponse = await requestTester.post(api).send({});

    // Assert
    expect(apiResponse.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(apiResponse.body).toMatchObject({
      code: responseHelper.responseCodes.badRequest,
      msg: '"name" is required',
      users: [],
    });
  });
});
