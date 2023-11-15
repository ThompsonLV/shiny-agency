import { formatJobList } from './'

describe('La fonction formatJobList', () => {
  test('On ajoute un virgule à un item', () => {
    const expectedState = 'item2, '
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  test('Ne mets pas de virgule pour le dernier élement', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})
