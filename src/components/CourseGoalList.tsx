import { type ReactNode, type FC } from "react";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

import { type CourseGoal as CGoal } from "../App";



type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({goals, onDeleteGoal}) => {
    if (goals.length === 0) {
        return (
            <InfoBox mode="hint">
                U have no course goals yet. Start adding some!
            </InfoBox>
        );
    }

    let warningBox: ReactNode;

    if (goals.length >= 4) {
        warningBox = 
        <InfoBox mode="warning">
            U're collecting a lot of goals. Dont put too much on ur plate
        </InfoBox>
    }
            
    return (
        <>
            {warningBox}
            <ul>
                {goals.map(item => (
                <li key={item.id}>
                    <CourseGoal id={item.id} title={item.title} onDelete={onDeleteGoal}>
                    <p>{item.description}</p>
                    </CourseGoal>
                </li>
                ))}
            </ul>
        </>
    )
}

export default CourseGoalList;