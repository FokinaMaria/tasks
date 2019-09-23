const { getSliced } = require('./utils');
const { data } = require('./data');
import axios from 'axios';



test('test getSliced, count = 3', () => {
    expect(getSliced(data, 3).length).toBe(3);
});

test('test getSliced, count = 4', () => {
    expect(getSliced(data, 4).length).toBe(4);
});

test('test getSliced, count = 5', () => {
    expect(getSliced(data, 5).length).toBe(5);
});

test('test getSliced, count = 6', () => {
    expect(getSliced(data, 6).length).toBe(6);
});

test('test getSliced, count = -5', () => {
    try {
        getSliced(data, -5);
    } catch (e) {
        expect(e.message).toBe('some error');
    }
});

test('test getSliced, count = {}', () => {
    expect(getSliced(data, {}).length).toBe(0);
});

test('тест количество элементов в массиве',()=>{
    expect(getSliced(data, 10).length).toBe(10)
});

test('matches if the actual array does not contain the expected elements', ()=>{
    const expected = [{todo: '1 todo'}];
   expect(getSliced(data, 1)).toEqual(expected)
});

test('matches if the actual object does not contain expected key: value pairs', ()=>{
    const expected = [{todo: '1 todoz'}];
   expect(getSliced(data, 1)).toEqual(expect.not.objectContaining(expected))
});

test('тест количество элементов в массиве',()=>{
    expect(getSliced(data, 5)).toHaveLength(5)
});

test('тест количество элементов в Data',()=>{
    expect(data).toHaveLength(10)
});

test('here is a new flavor idea', () => {
    expect(getSliced(data, 1)).toBeDefined();
});

test('toMatchObject applied to arrays', () => {
    expect(getSliced(data, 1)).toMatchObject([{todo: '1 todo' }]);
});