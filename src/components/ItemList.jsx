import { Eye, EyeClosedIcon } from "lucide-react";
import { useState } from "react";

export default function ItemList({
	name,
	item,
	handleShowForm,
	resumePreview,
	setResumePreview,
}) {
	const [visibility, setVisibility] = useState(true);

	const handleVisibility = (selectedItem) => () => {
		const updatedList = resumePreview[`${name}s`].map((item) => {
			if (selectedItem.id === item.id) {
				return {
					...item,
					visibility: !visibility,
				};
			}

			return item;
		});

		setResumePreview({ ...resumePreview, [`${name}s`]: updatedList });

		setVisibility(!visibility);
	};

	return (
		<li className="bg-card mb-2 flex cursor-pointer items-center rounded-sm p-4 shadow-sm">
			<div
				className="flex-1"
				onClick={() => {
					handleShowForm(true, item.id).call();
				}}
			>
				{item.name}
			</div>

			<div onClick={handleVisibility(item)} className="cursor-pointer">
				{visibility ? <Eye /> : <EyeClosedIcon />}
			</div>
		</li>
	);
}
