import { useRef, FormEventHandler } from "react";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { Button } from "@/components/ui/button";

export default function UpdatePinForm({
    className = "",
}: {
    className?: string;
}) {
    const pinInput = useRef<HTMLInputElement>(null);
    const currentPinInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_pin: "",
        pin: "",
        pin_confirmation: "",
    });

    const updatePin: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("pin.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.pin) {
                    reset("pin", "pin_confirmation");
                    pinInput.current?.focus();
                }

                if (errors.current_pin) {
                    reset("current_pin");
                    currentPinInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <form onSubmit={updatePin} className="mt-6 space-y-6">
                <div>
                    <Label htmlFor="current_pin">Current Pin</Label>

                    <Input
                        type='password'
                        id="current_pin"
                        ref={currentPinInput}
                        value={data.current_pin}
                        onChange={(e) =>
                            setData("current_pin", e.target.value)
                        }
                        className="mt-1 block w-full"
                        autoComplete="current-pin"
                    />

                    <InputError
                        message={errors.current_pin}
                        className="mt-2"
                    />
                </div>

                <div>
                    <Label htmlFor="pin">New Pin</Label>

                    <Input
                        id="pin"
                        type='password'
                        ref={pinInput}
                        value={data.pin}
                        onChange={(e) => setData("pin", e.target.value)}
                        className="mt-1 block w-full"
                        autoComplete="new-pin"
                    />

                    <InputError message={errors.pin} className="mt-2" />
                </div>

                <div>
                    <Label htmlFor="pin_confirmation">
                        Confirm Pin
                    </Label>

                    <Input
                        id="pin_confirmation"
                        type='password'
                        value={data.pin_confirmation}
                        onChange={(e) =>
                            setData("pin_confirmation", e.target.value)
                        }
                        className="mt-1 block w-full"
                        autoComplete="new-pin"
                    />

                    <InputError
                        message={errors.pin_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Save</Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
