import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ChevronDown, Briefcase, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardForm from "./CardForm";
import ItemList from "./ItemList";

export default function CustomCard({
	name,
	isActive,
	setActiveIndex,
	index,
	resumePreview,
	setResumePreview,
}) {
	const [showForm, setShowForm] = useState(false);
	const [items, setItems] = useState(() => {
		if (resumePreview[`${name}s`].length > 1) {
			return resumePreview[`${name}s`].filter((item) => Object.keys(item).length > 0);
		}

		return [];
	});
	const [selectedId, setSelectedId] = useState("");

	const selectedItem = items.find((item) => item.id === selectedId);

	const handleShowForm =
		(status, itemId = null) =>
		() => {
			if (itemId) {
				setSelectedId(itemId);
			}

			setShowForm(status);
		};

	const handleSaveItem = (form, uuid) => {
		let finalList;

		if (form.id) {
			finalList = items.map((item) => {
				if (item.id === form.id) {
					const updatedItem = { ...form };
					return updatedItem;
				}

				return item;
			});
		} else {
			const newItem = { ...form, id: uuid };
			finalList = [...items, newItem];
		}

		setItems(finalList);

		setResumePreview({
			...resumePreview,
			[`${name}s`]: [{}, ...finalList],
		});

		handleShowForm(false).call();
		setSelectedId("");
	};

	const handleRemoveItem = (form) => {
		const finalList = items.filter((item) => item.id !== form.id);

		setItems(finalList);

		setResumePreview({
			...resumePreview,
			[`${name}s`]: [{}, ...finalList],
		});

		handleShowForm(false).call();
	};

	return (
		<Card className="w-100 gap-y-2">
			<CardHeader
				className="group flex cursor-pointer items-center"
				onClick={() => setActiveIndex(isActive ? null : index)}
			>
				{name === "work" ? <Briefcase /> : <GraduationCap />}
				<CardTitle className="pointer-events-none text-lg capitalize">{name}</CardTitle>
				<ChevronDown
					className={`ml-auto size-6 rounded-lg p-0.5 duration-150 group-hover:bg-gray-200 ${!isActive ? "rotate-0" : "rotate-180"}`}
				/>
			</CardHeader>

			{isActive && (
				<CardContent className="flex flex-col justify-center">
					{showForm && (
						<CardForm
							name={name}
							handleFormState={handleShowForm}
							handleSaveItem={handleSaveItem}
							handleRemoveItem={handleRemoveItem}
							handleSelectedId={setSelectedId}
							selectedItem={selectedItem}
							resumePreview={resumePreview}
							setResumePreview={setResumePreview}
							items={items}
						/>
					)}

					{!showForm && (
						<>
							<ul className="mb-4">
								{items?.map((item) => (
									<ItemList
										name={name}
										resumePreview={resumePreview}
										setResumePreview={setResumePreview}
										items={items}
										setItems={setItems}
										item={item}
										key={item.id}
										handleShowForm={handleShowForm}
									/>
								))}
							</ul>

							<Button onClick={handleShowForm(true)} className="self-center capitalize">
								<Plus />
								{name}
							</Button>
						</>
					)}
				</CardContent>
			)}
		</Card>
	);
}
