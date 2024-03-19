// import LineChart as LChart from "./Components/LineCharts/LineCharts"; //jodi kokhono component er nam er sathe duplicate hoye jay sekhetre eivabe use korte hobe.
import { LineChart as LChart, Line } from 'recharts';
const LineChart = () => {

    const mathMarks = [
        {"id": 1, "name": "John", "math_marks": 85},
        {"id": 2, "name": "Alice", "math_marks": 78},
        {"id": 3, "name": "Michael", "math_marks": 90},
        {"id": 4, "name": "Emily", "math_marks": 65},
        {"id": 5, "name": "David", "math_marks": 72},
        {"id": 6, "name": "Sarah", "math_marks": 88},
        {"id": 7, "name": "Emma", "math_marks": 79},
        {"id": 8, "name": "Daniel", "math_marks": 92},
        {"id": 9, "name": "Sophia", "math_marks": 84},
        {"id": 10, "name": "James", "math_marks": 70}
      ]
      
    return (
        <div className=''>
            <LChart width={800} height={700} data={mathMarks}>
                <Line type="monotone" datakey='math_marks' stroke="#000000"></Line>
            </LChart>
        </div>
    );
};
export default LineChart;