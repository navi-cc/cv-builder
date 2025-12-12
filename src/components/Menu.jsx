import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Wrench } from "lucide-react";
import ContentForm from "./ContentForm";
import ContentCustomize from "./ContentCustomize";
import ResumePreview from "./ResumePreview";
import { useState } from "react";

export default function Menu() {
	const [resumePreview, setResumePreview] = useState({
		name: "",
		email: "",
		location: "",
		phoneNumber: null,

		educations: [{}],
		works: [{}],
	});

	return (
		<>
			<Tabs
				defaultValue="content"
				orientation="vertical"
				className="h-40 flex-row gap-x-8"
			>
				<TabsList className="h-auto flex-col gap-y-2 p-1">
					<TabsTrigger value="content" className="w-full flex-col p-1.5 text-base">
						<FileText className="size-4.5" />
						Content
					</TabsTrigger>
					<TabsTrigger value="customize" className="w-full flex-col p-1.5 text-base">
						<Wrench className="size-4.5" /> Customize
					</TabsTrigger>
				</TabsList>

				<TabsContent className="flex-none" value="content">
					<ContentForm
						resumePreview={resumePreview}
						setResumePreview={setResumePreview}
					/>
				</TabsContent>
				<TabsContent value="customize">
					<ContentCustomize />
				</TabsContent>

				<ResumePreview {...resumePreview} />
			</Tabs>
		</>
	);
}
