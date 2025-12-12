import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function PersonalCard({ resumePreview, setResumePreview }) {
	const handleInputChange = (propertyName) => (e) => {
		console.log("lol");

		setResumePreview({ ...resumePreview, [propertyName]: e.target.value });
	};

	return (
		<Card className="w-100 gap-y-2 duration-200">
			<CardHeader>
				<CardTitle className="text-lg">Personal Details</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-y-3">
				<Field className="gap-y-1">
					<FieldLabel htmlFor="username">Full Name</FieldLabel>
					<Input
						id="username"
						type="text"
						placeholder="Enter Full Name"
						onChange={handleInputChange("name")}
					/>
				</Field>
				<Field className="gap-y-1">
					<FieldLabel htmlFor="email">Email</FieldLabel>
					<Input
						id="email"
						type="text"
						placeholder="Enter email"
						onChange={handleInputChange("email")}
					/>
				</Field>

				<Field className="gap-y-1">
					<FieldLabel htmlFor="phone_number">Phone Number</FieldLabel>
					<Input
						id="phone_number"
						type="text"
						placeholder="Max Leiter"
						onChange={handleInputChange("phoneNumber")}
					/>
				</Field>

				<Field className="gap-y-1">
					<FieldLabel htmlFor="address">Address</FieldLabel>
					<Input
						id="address"
						type="text"
						placeholder="Enter Address"
						onChange={handleInputChange("location")}
					/>
				</Field>
			</CardContent>
		</Card>
	);
}
