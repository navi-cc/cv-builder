import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "./DatePicker";

export default function ExperienceForm({
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
				works: [
					{
						...resumePreview.works[0],
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
				works: [
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
		<div className="flex flex-col gap-y-4">
			<Field className="gap-y-1">
				<FieldLabel htmlFor="company_name">Company</FieldLabel>
				<Input
					id="company_name"
					type="text"
					placeholder="Enter company name"
					onChange={handleInputChange("name")}
					value={form.name}
				/>
			</Field>
			<Field className="gap-y-1">
				<FieldLabel htmlFor="position_title">Position</FieldLabel>
				<Input
					id="position_title"
					type="text"
					placeholder="Enter position title"
					onChange={handleInputChange("title")}
					value={form.title}
				/>
			</Field>

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

			<Field className="gap-y-1">
				<FieldLabel htmlFor="description">Description</FieldLabel>
				<Textarea
					id="description"
					placeholder="Enter description..."
					rows={4}
					onChange={handleInputChange("description")}
					value={form.description}
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
		</div>
	);
}
