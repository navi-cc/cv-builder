import { format } from "date-fns";

export default function WorkList({ work }) {
	return (
		<li>
			<div className="flex flex-1">
				<div className="flex flex-col">
					<span className="font-semibold">{work.name}</span>
					<span>{work.title}</span>
				</div>

				<div className="flex flex-1 flex-col items-end">
					<span>{work.location}</span>
					<span>
						{work.startDate && format(work.startDate, "MMM yyyy") + " - "}
						{work.endDate && format(work.endDate, "MMM yyyy")}
					</span>
				</div>
			</div>

			<p>{work.description}</p>
		</li>
	);
}
