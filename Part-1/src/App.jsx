import { useState } from 'react';

const StatisticLine = (props) => {
    const { text, value } = props;
    return (
        <p>
            {text} {value}
        </p>
    );
};

const Statistics = ({ good, neutral, bad }) => {
    const average = (good - bad) / (good + neutral + bad) || 0;
    const positive = (good / (good + neutral + bad)) * 100 || 0;

    return (
        <div>
            <h1>statistics</h1>
            {!(good + neutral + bad) ? (
                <StatisticLine text='No feedback given' value='' />
            ) : (
                <div>
                    <StatisticLine text='good' value={good} />
                    <StatisticLine text='neutral' value={neutral} />
                    <StatisticLine text='bad' value={bad} />
                    <StatisticLine text='all' value={good + neutral + bad} />
                    <StatisticLine text='average' value={average} />
                    <StatisticLine text='positive' value={`${positive} %`} />
                </div>
            )}
        </div>
    );
};

const Button = (props) => {
    const { onGoodClick, onNeutralClick, onBadClick } = props;
    return (
        <div>
            <button onClick={onGoodClick}>good</button>
            <button onClick={onNeutralClick}>neutral</button>
            <button onClick={onBadClick}>bad</button>
        </div>
    );
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const handleClickGood = () => {
        setGood(good + 1);
    };
    const handleClickNeutral = () => {
        setNeutral(neutral + 1);
    };
    const handleClickBad = () => {
        setBad(bad + 1);
    };

    return (
        <div>
            <h1>give feedback</h1>
            <Button onGoodClick={handleClickGood} onNeutralClick={handleClickNeutral} onBadClick={handleClickBad} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
