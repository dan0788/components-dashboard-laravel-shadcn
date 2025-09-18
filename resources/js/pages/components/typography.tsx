import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { usePageData } from "@/hooks/get-page"
import ComponentsPage from '@/pages/components'
import { ReactNode } from "react";

export const TypographyPage = () => {
  const pageData = usePageData();

  return (
    <>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="flex-col-1 w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance m-5">
            h1<br />Taxing Laughter: The Joke Tax Chronicles
          </h1>
          <h2 className="scroll-m-20 m-5 border-b text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            h2<br />The People of the Kingdom
          </h2>
          <h3 className="scroll-m-20 text-center m-5 text-2xl font-semibold tracking-tight">
            h3<br />The Joke Tax
          </h3>
          <h4 className="scroll-m-20 text-center m-5 text-xl font-semibold tracking-tight">
            h4<br />People stopped telling jokes
          </h4>
          <p className="leading-7 text-center m-5 [&:not(:first-child)]:mt-6">
            p<br />The king, seeing how much happier his subjects were, realized the error of
            his ways and repealed the joke tax.
          </p>
          <blockquote className="mt-6 text-center m-5 border-l-2 pl-6 italic">
            blockquote<br />&quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
            it&apos;s only fair that they should pay for the privilege.&quot;
          </blockquote>
          <code className="bg-muted text-center m-5 relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Inline code<br />@radix-ui/react-alert-dialog
          </code>
          <p className="text-muted-foreground text-xl text-center m-5">
            lead<br />A modal dialog that interrupts the user with important content and expects
            a response.
          </p>
          <div className="text-lg font-semibold text-center m-5">large<br />Are you absolutely sure?</div>
          <small className="text-sm leading-none font-medium text-center m-5">small<br />Email address</small>
          <p className="text-muted-foreground text-sm text-center m-5">muted<br />Enter your email address.</p>

        </div>
      </div>
    </>
  );
}

TypographyPage.components = (page: ReactNode) => <ComponentsPage title="Typography" children={page} />