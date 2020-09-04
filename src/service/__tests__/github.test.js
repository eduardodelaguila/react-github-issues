import { getIssues } from '../github';
import responseMock from '__mocks__/apiResponse.mock';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(responseMock),
    })
);
test('Get Issues returns a list of issues', async () => {
    try {
        const issues = await getIssues({
            query: 'Bug: Overwriting console.log during rendering',
        });
        expect(issues).toEqual(responseMock);
    } catch (e) {}
});

test('Get Issues handles errors', async () => {
    const error = new Error('Erorr');
    fetch.mockImplementationOnce(() => Promise.reject());
    try {
        await getIssues({
            query: 'Bug: Overwriting console.log during rendering',
        });
    } catch (e) {
        expect(e).toMatch(error);
    }
});
