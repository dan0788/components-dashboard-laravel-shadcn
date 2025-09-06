import AuthenticatedLayout from "@/layouts/authenticated-layout";
import DeleteUserForm from "@/pages/profile/partials/delete-user-form";
import UpdatePasswordForm from "@/pages/profile/partials/update-password-form";
import UpdateProfileInformationForm from "@/pages/profile/partials/update-profile-information-form";
import { Head } from "@inertiajs/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { usePageData } from "@/hooks/get-page"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Edit({
    mustVerifyEmail,
    status,
}: { mustVerifyEmail: boolean; status?: string }) {
    const pageData = usePageData();

    return (
        <AuthenticatedLayout breadcrumbs={pageData.breadcrumbs}>
            <div className="[--header-height:calc(theme(spacing.14))]">

                <div className="space-y-6">
                    <Head title={pageData.title} />
                    <Tabs defaultValue="Personal Information">
                        <TabsList>
                            <TabsTrigger value="Personal Information">Personal Information</TabsTrigger>
                            <TabsTrigger value="Account Information">Account Information</TabsTrigger>
                        </TabsList>

                        <TabsContent value="Personal Information">
                            <Card className="my-5">
                                <CardHeader>
                                    <CardTitle>User</CardTitle>
                                    <CardDescription className="!my-4">
                                        <Label htmlFor="name" className="pl-1">Name</Label>
                                        <Input type="text" id="name" placeholder="Name" />
                                    </CardDescription>
                                    <CardDescription className="!my-4">
                                        <Label htmlFor="last-name" className="pl-1">Last Name</Label>
                                        <Input type="text" id="last-name" placeholder="Last Name" />
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <DeleteUserForm className="max-w-xl" />
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="Account Information">
                            <Card className="my-5">
                                <CardHeader>
                                    <CardTitle>Profile Information</CardTitle>
                                    <CardDescription>
                                        Update your account's profile information and email
                                        address.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                        className="max-w-xl"
                                    />
                                </CardContent>
                            </Card>

                            <Card className="my-5">
                                <CardHeader>
                                    <CardTitle>Update Password</CardTitle>
                                    <CardDescription>
                                        Ensure your account is using a long, random password
                                        to stay secure.
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <UpdatePasswordForm className="max-w-xl" />
                                </CardContent>
                            </Card>

                            <Card className="my-5">
                                <CardHeader>
                                    <CardTitle>Delete Account</CardTitle>
                                    <CardDescription>
                                        Once your account is deleted, all of its resources
                                        and data will be permanently deleted. Before
                                        deleting your account, please download any data or
                                        information that you wish to retain.
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <DeleteUserForm className="max-w-xl" />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>



                </div>
            </div>
        </AuthenticatedLayout>

    );
}