import fs from 'fs';
const fsPromises = fs.promises;

export async function getData() {
    let data: any = await fsPromises.readFile('input.txt');
    return data;
} 