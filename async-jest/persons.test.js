import { getPersons } from './persons'

test('Receive 10 persons data', () => {
    expect.assertions(1)
    return getPersons().then(response => {
        console.log(response.data.length)
        expect(response.data.length).toBe(10)
    })
})