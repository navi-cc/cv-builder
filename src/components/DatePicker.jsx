import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

export default function DatePicker({
	items,
	formName,
	labelName,
	setForm,
	form,
	resumePreview,
	setResumePreview,
}) {
	const [open, setOpen] = useState(false);
	const dateName = labelName === "Start Date" ? "startDate" : "endDate";
	const date = labelName === "Start Date" ? form.startDate : form.endDate;
	return (
		<div className="flex flex-1 flex-col gap-1">
			<Label htmlFor={labelName}>{labelName}</Label>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						id={labelName}
						className="justify-between font-normal"
					>
						{date ? date.toLocaleDateString() : "Select date"}
						<ChevronDownIcon />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto overflow-hidden p-0" align="start">
					<Calendar
						mode="single"
						selected={date}
						captionLayout="dropdown"
						onSelect={(newDate) => {
							setForm({
								...form,
								[dateName]: newDate,
							});

							setOpen(false);

							if (form.id) {
								const updatedList = resumePreview[`${formName}s`].map((item) => {
									if (form.id === item.id) {
										return {
											...item,
											[dateName]: newDate,
										};
									}

									return item;
								});

								setResumePreview({ ...resumePreview, [`${formName}s`]: updatedList });

								return;
							}

							setResumePreview({
								...resumePreview,
								[`${formName}s`]: [
									{
										...resumePreview[`${formName}s`][0],
										[dateName]: newDate,
									},

									...items,
								],
							});
						}}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
