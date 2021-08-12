import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import { appCore } from '../../app';
import { hobbiesRepository } from '../../repositories/index';
import { responseHelper } from '../../helpers';
import { payload } from '../mock-payload';
import constants from '../../constants';
const { ROUTES } = constants;
const { VERSIONS, PATHS } = ROUTES;
jest.mock('../../repositories/hobbies.ts');

const mockHobbiesRepository = hobbiesRepository as jest.Mocked<
  typeof hobbiesRepository
>;

// Hobbies Api test

/**
 * The api test for hobbies record tests that when the route is called,
 * the correct response is returned and also that the correct status code is returned
 */

let app;
let server;
let requestTester;

describe(`POST ${VERSIONS.V1}${PATHS.HOBBIES}`, () => {
  
  beforeAll(async () => {
    app = await appCore();
    server = app.listen(3000);
    requestTester = request(app);
  });
  afterAll((done) => {
    // Close the server to avoid memory leaks
    server.close((err) => done());
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() =>
    mockHobbiesRepository.saveHobbies.mockImplementation(jest.fn())
  );

  it('should respond with json containing a list of records with the correct status code', async () => {
    // Arrange
    const api = `${VERSIONS.V1}${PATHS.HOBBIES}`;

    mockHobbiesRepository.saveHobbies.mockResolvedValue(
      payload.MockHobbiesResponsePayload
    );

    // Act
    const apiResponse = await requestTester
      .post(api)
      .send(payload.MockHobbiesRequestPayload);

    // Assert
    expect(apiResponse.statusCode).toBe(StatusCodes.OK);
    expect(apiResponse.body).toMatchObject({
      code: 0,
      msg: 'Success',
      hobbies: payload.MockHobbiesResponsePayload,
    });
  });

  it('should respond with json containing an error response with a 400 bad request status code due to empty request body', async () => {
    // Arrange
    const api = `${VERSIONS.V1}${PATHS.HOBBIES}`;
    mockHobbiesRepository.saveHobbies.mockResolvedValue(
      payload.MockHobbiesResponsePayload
    );

    // Act
    const apiResponse = await requestTester.post(api).send({});

    // Assert
    expect(apiResponse.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(apiResponse.body).toMatchObject({
      code: responseHelper.responseCodes.badRequest,
      msg: '"year" is required',
      hobbies: [],
    });
  });
});
