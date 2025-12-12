import { format } from "date-fns";

export default function EducationList({ education }) {
	return (
		<li>
			<div className="flex">
				<div className="flex flex-col">
					<span className="font-semibold">{education.name}</span>
					<span>{education.title}</span>
				</div>

				<div className="flex flex-1 flex-col items-end">
					<span>{education.location}</span>
					<span>
						{education.startDate && format(education.startDate, "MMM yyyy") + " - "}
						{education.endDate && format(education.endDate, "MMM yyyy")}
					</span>
				</div>
			</div>
		</li>
	);
}
