import { Separator } from "@/components/ui/separator";

import EducationList from "./EducationList";
import WorkList from "./WorkList";

export default function ResumePreview({
	name,
	email,
	location,
	phoneNumber,
	educations = [],
	works = [],
}) {
	const hasInputtingFoota =
		Object.keys(works[0]).length > 0 && !Object.values(works[0]).every((value) => !value);

	const hasInputtingFooto =
		Object.keys(educations[0]).length > 0 &&
		!Object.values(educations[0]).every((value) => !value);

	console.log(educations);

	return (
		<div
			id="resume-preview"
			className="flex h-dvh flex-1 flex-col gap-y-10 rounded-xs border p-8 shadow"
		>
			<section className="flex flex-col gap-y-2">
				<h1 className="text-5xl">{name}</h1>
				<div className="flex h-4 items-center">
					{location && <span className="text-xs">{location} | &nbsp;</span>}
					{email && <span className="text-xs">{email} | &nbsp;</span>}
					{phoneNumber && <span className="text-xs">{phoneNumber}</span>}
				</div>

				{name && location && email && phoneNumber && (
					<div className="text-xs">Software Engineering, Javascript, React, Node</div>
				)}
			</section>

			{(hasInputtingFooto || educations.length > 1) && (
				<section className="flex flex-col gap-y-2">
					<h2 className="text-md font-semibold">EDUCATION</h2>
					<Separator className="bg-black" />

					<ul className="flex flex-col gap-y-5">
						{educations.map((education, index) => {
							if (index === 0) return;
							if (!education.visibility) return;
							return <EducationList key={education.id} education={education} />;
						})}
						<EducationList key={"previewOnlyEducationKey"} education={educations[0]} />
					</ul>
				</section>
			)}

			{(hasInputtingFoota || works.length > 1) && (
				<section className="flex flex-col gap-y-2">
					<h2 className="text-md font-semibold">WORK EXPERIENCE</h2>
					<Separator className="bg-black" />
					<div>
						<ul className="flex flex-col gap-y-5">
							{works.map((work, index) => {
								if (index === 0) return;
								if (!work.visibility) return;
								return <WorkList key={work.id} work={work} />;
							})}
							<WorkList key={"previewOnlyWorkKey"} work={works[0]} />
						</ul>
					</div>
				</section>
			)}
		</div>
	);
}
