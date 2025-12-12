import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import DatePicker from "./DatePicker";

export default function EducationForm({
	name,
	form,
	setForm,
	resumePreview,
	setResumePreview,
	items,
}) {
	const handleInputChange = (propName) => (e) => {
		setForm({ ...form, [propName]: e.target.value });

		if (!form.id) {
			setResumePreview({
				...resumePreview,
				educations: [
					{
						...resumePreview.educations[0],
						[propName]: e.target.value,
					},
					...items,
				],
			});

			return;
		}

		if (form.id) {
			setResumePreview({
				...resumePreview,
				educations: [
					{},
					...items.map((item) => {
						if (item.id === form.id) {
							return {
								...form,
								[propName]: e.target.value,
							};
						}

						return item;
					}),
				],
			});
		}
	};
	return (
		<>
			<Field className="gap-y-1">
				<FieldLabel htmlFor="school">School</FieldLabel>
				<Input
					id="school"
					type="text"
					placeholder="Enter school / university"
					onChange={handleInputChange("name")}
					value={form.name}
				/>
			</Field>
			<Field className="gap-y-1">
				<FieldLabel htmlFor="degree">Degree</FieldLabel>
				<Input
					id="degree"
					type="text"
					placeholder="Enter degree / field of study"
					onChange={handleInputChange("title")}
					value={form.title}
				/>
			</Field>

			<div className="container flex gap-x-2">
				<DatePicker
					items={items}
					formName={name}
					setForm={setForm}
					resumePreview={resumePreview}
					setResumePreview={setResumePreview}
					form={form}
					labelName="Start Date"
				/>
				<DatePicker
					items={items}
					formName={name}
					setForm={setForm}
					resumePreview={resumePreview}
					setResumePreview={setResumePreview}
					form={form}
					labelName="End Date"
				/>
			</div>

			<Field className="gap-y-1">
				<FieldLabel htmlFor="location">Location</FieldLabel>
				<Input
					id="location"
					type="text"
					placeholder="Enter location"
					onChange={handleInputChange("location")}
					value={form.location}
				/>
			</Field>
		</>
	);
}
