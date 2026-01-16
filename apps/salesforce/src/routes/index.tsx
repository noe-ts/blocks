
import { SidebarProvider } from "@/components/ui/sidebar";
import { createFileRoute } from "@tanstack/react-router";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconArchiveFilled, IconBellFilled, IconInfoSquareRoundedFilled } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserProfile } from "@/components/user-profile";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 px-4 shrink-0 items-center border-b bg-sidebar justify-between">
          <h1 className="font-medium">Sales dashboard</h1>

          <div className="flex items-center gap-1">
            <Tabs className="h-8">
              <TabsList className="bg-muted-foreground/5 p-0">
                <TabsTrigger className="border border-muted-foreground/30" value="refresh">Refresh</TabsTrigger>
                <TabsTrigger value="edit">Edit</TabsTrigger>
                <TabsTrigger value="subscribe">Subscribe</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex items-center">
              <Separator orientation="vertical" className="h-4 mx-2" />
            </div>
            <Button variant={"outline"} size="sm">
              <Star className="text-yellow-400 fill-yellow-400 size-3.5" />
              <span className="text-muted-foreground ml-1">Favorite</span>
            </Button>
            <div className="flex items-center">
              <Separator orientation="vertical" className="h-4 mx-2" />
            </div>
            <div className="flex items-center gap-1">
              <Button variant={"outline"} size="icon-sm">
                <IconBellFilled className="size-3.5 text-muted-foreground" />
              </Button>
              <Button variant={"outline"} size="icon-sm">
                <IconArchiveFilled className="size-3.5 text-muted-foreground" />
              </Button>
              <Button variant={"outline"} size="icon-sm">
                <IconInfoSquareRoundedFilled className="size-3.5 text-muted-foreground" />
              </Button>
            </div>
            <div className="flex items-center">
              <Separator orientation="vertical" className="h-4 mx-2" />
            </div>
            <UserProfile />
          </div>

        </header>
        <div className="flex flex-1 flex-col gap-4 pt-0">

        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
