import { payload } from '../mock-payload';
import { hobbiesRepository } from '../../repositories/index';
import { hobbiesServices } from '../../services/hobbies';
jest.mock('../../repositories/hobbies.ts');
const { MockHobbiesRequestPayload, MockHobbiesResponsePayload } = payload;
const mockHobbiesRepository = hobbiesRepository as jest.Mocked<
  typeof hobbiesRepository
>;

/**
 * The unit tests for hobbiesServices.fetchHobbies  is being done in Isolation
 * without a connection to any database or other components of the codebase.
 *
 * The pattern being used here is called arrange-act-assert (AAA).
 * Its used to make the test cleaner by the different actions being taken into different sections based on what they do.
 * https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80
 */

describe('Hobbies Service Function', () => {
  afterEach(() => jest.clearAllMocks());
  // beforeEach(() =>
  // //mockHobbiesRepository.saveHobbies.mockImplementation(jest.fn())
  // );

  it('should call the hobbiesRepository function fetchHobbies and successfully return a list of Hobbies retrieved from it', async () => {
    //Arrange
    const value = mockHobbiesRepository.saveHobbies.mockResolvedValue({
      ...MockHobbiesResponsePayload,
    });
    console.log({ value });

    const requestContext = {
      body: payload.MockHobbiesRequestPayload,
    };

    // Act
    const result = await hobbiesServices.createHobbies(requestContext);
    console.log({ result });

    // Assert
    expect(mockHobbiesRepository.saveHobbies).toHaveBeenCalled();
    expect(result).toStrictEqual(payload.MockHobbiesResponsePayload);
    expect(result).toMatchObject(payload.MockHobbiesResponsePayload);
  });

  it('should throw an error due to an empty request body and create hobbies repository method should not have been called', async () => {
    // Arrange
    mockHobbiesRepository.saveHobbies.mockResolvedValue({
      ...MockHobbiesResponsePayload,
    });
    const requestContext = {
      body: {},
    };

    try {
      // Act
      await hobbiesServices.createHobbies(requestContext);
    } catch (e) {
      // Assert
      expect(e.message.length).not.toBe(null);
      expect(hobbiesRepository.fetchHobbies).toHaveBeenCalledTimes(0);
    }
  });

  it('should throw an error due to a required field missing and the create hobbies repository method should not have been called', async () => {
    // Arrange
    mockHobbiesRepository.fetchHobbies.mockResolvedValue(
      payload.MockHobbiesResponsePayload
    );
    //We need a clone so as to keep the Hobbies payload immutable so it doesn't affect subsequent tests

    const cloneRequestPayload = { ...payload.MockHobbiesRequestPayload };
    delete cloneRequestPayload.name;
    const requestContext = {
      body: cloneRequestPayload,
    };

    try {
      // Act
      //await hobbiesServices.fetchHobbies (requestContext);
    } catch (e) {
      // Assert
      expect(e.message.length).not.toBe(null);
      expect(hobbiesRepository.fetchHobbies).toHaveBeenCalledTimes(0);
    }
  });

  it('should throw an error due to a bad value for a field and the create Hobbies repository function should not have been called', async () => {
    // Arrange
    mockHobbiesRepository.fetchHobbies.mockResolvedValue(
      payload.MockHobbiesResponsePayload
    );
    // We need a clone so as to keep the Hobbies payload immutable so it doesn't affect subsequent tests
    const cloneRequestPayload = { ...payload.MockHobbiesRequestPayload };
    cloneRequestPayload.passionLevel = 'lower'; // Simulate a wrong value
    const requestContext = {
      body: cloneRequestPayload,
    };

    try {
      // Act
      await hobbiesServices.fetchHobbies(requestContext);
    } catch (e) {
      // Assert
      expect(e.message.length).not.toBe(null);
      expect(hobbiesRepository.fetchHobbies).toHaveBeenCalledTimes(0);
    }
  });
});
