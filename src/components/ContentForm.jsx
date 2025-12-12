import PersonalCard from "./PersonalCard";
import CustomCard from "./CustomCard";
import { useState } from "react";

export default function ContentForm(props) {
	const [activeIndex, setActiveIndex] = useState(null);
	return (
		<div className="flex flex-col gap-y-5">
			<PersonalCard {...props} />
			<CustomCard
				name={"education"}
				isActive={activeIndex === 0}
				index={0}
				setActiveIndex={setActiveIndex}
				{...props}
			/>
			<CustomCard
				name={"work"}
				isActive={activeIndex === 1}
				setActiveIndex={setActiveIndex}
				index={1}
				{...props}
			/>
		</div>
	);
}
