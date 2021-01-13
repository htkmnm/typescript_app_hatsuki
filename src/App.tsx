import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const isFlag1: boolean = true;
  const isFlag2: boolean = false;

  const num1: number = 10;
  const num2: number = -10;

  const str1: string = 'aaa';

  // 推奨
  let temp: string[] = ['adf', 'kdk', 'iku'];
  // 非推奨
  let temp2: Array<string> = ['adf', 'kdk', 'iku'];

  let taple: [string, number] = ['hatsuki', 9999];

  let profile1: any = 123456;
  let profile2: any = 'test';
  let profile3: any = false;
  let profile4: any = ['adf', 'kdk', 'iku'];

  // const test = (): void => {
  // return 'Hello'
  // };

  const test1 = (): null => {
    return null
  };

  const test2 = (): undefined => {
    return undefined
  };

  // const error = (number: string): never => {
  //   throw new Error();
  // };

  // console.log(error('Hello'));

  // 非推奨
  let object1: TestType = { id: 1, name: 'hatsuki', age: 28 }
  // 推奨
  let object2: { id: number, name: string } = { id: 1, name: 'hatsuki' };

  type TestType = {
    id: number,
    name: string
    age: number;
  };

  interface ObjectInterface {
    id: number;
    name: string;
    age: number;
  };

  let object3: ObjectInterface = { id: 1, name: 'hatsuki', age: 28 };

  const kansu = (): number => 43;

  let numberAny: any = kansu();
  let numberUnknown: unknown = kansu();

  let sum1 = 10 + numberAny;
  // let sum2 = 10 + numberUnknown;

  type Pitcher1 = {
    throwingSpeed: number;
  };

  type Batter1 = {
    battingAverage: number;
  };

  type TwoWayPlayer = Pitcher1 & Batter1;

  let sasaki: TwoWayPlayer = {
    throwingSpeed: 154,
    battingAverage: 3.65,
  };

  let name: string | number = 'sasaki'
  name = 100
  // name = false

  // LITERAL型
  let nitiyoubi: '日' = '日';
  let yes: true = true;
  let week: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';

  // ENUM型
  enum Month {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    Npvember,
    December,
  }

  console.log(Month.April);

  interface mondai1 {
    id: number;
    name: string;
    url: string;
    isStart: boolean;
  };

  const mondai1: mondai1 = { id: 1, name: 'mondai', url: 'http://mondai.com', isStart: false, };

  type Mondai2Type = {
    id: number;
    name: string;
    url: string;
    isStart: boolean;
  };

  const Mondai2Type = { id: 1, name: 'mondai', url: 'http://mondai.com', isStart: false, };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
