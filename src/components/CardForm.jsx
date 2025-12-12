import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function CardForm({
	name,
	handleFormState,
	handleSaveItem,
	handleRemoveItem,
	handleSelectedId,
	selectedItem,
	resumePreview,
	setResumePreview,
	items,
}) {
	const [form, setForm] = useState(() => {
		const emptyForm = {
			name: "",
			title: "",
			location: "",
			startDate: new Date(),
			endDate: new Date(),
			visibility: true,
		};

		if (name === "work") {
			emptyForm.description = "";
		}

		return selectedItem ? selectedItem : emptyForm;
	});

	const handleCancel = function () {
		setResumePreview({
			...resumePreview,
			[`${name}s`]: [{}, ...items],
		});

		handleFormState(false).call();
		handleSelectedId("");
	};

	return (
		<div className="flex flex-col gap-y-5">
			{name === "work" ? (
				<ExperienceForm
					name={name}
					form={form}
					setForm={setForm}
					resumePreview={resumePreview}
					setResumePreview={setResumePreview}
					items={items}
				/>
			) : (
				<EducationForm
					name={name}
					form={form}
					setForm={setForm}
					resumePreview={resumePreview}
					setResumePreview={setResumePreview}
					items={items}
				/>
			)}

			<div className="container flex">
				<Button
					onClick={() => {
						handleRemoveItem(form);
					}}
					variant="destructive"
					disabled={!("id" in form)}
				>
					<Trash />
					Delete
				</Button>
				<Button variant="outline" onClick={handleCancel} className="mr-1.5 ml-auto">
					Cancel
				</Button>
				<Button
					onClick={() => {
						const uuid = "id" in form ? form.id : crypto.randomUUID();

						handleSaveItem(form, uuid);
					}}
				>
					Save
				</Button>
			</div>
		</div>
	);
}
