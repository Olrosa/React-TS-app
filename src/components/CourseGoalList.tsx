import { type FC } from "react";
import CourseGoal from "./CourseGoal";

import { type CourseGoal as CGoal } from "../App";


type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({goals, onDeleteGoal}) => {
    return (
        <ul>
            {goals.map(item => (
            <li key={item.id}>
                <CourseGoal id={item.id} title={item.title} onDelete={onDeleteGoal}>
                <p>{item.description}</p>
                </CourseGoal>
            </li>
            ))}
        </ul>
    )
}

export default CourseGoalList;