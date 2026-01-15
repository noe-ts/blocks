
import { SidebarProvider } from "@/components/ui/sidebar";
import { createFileRoute } from "@tanstack/react-router";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { BreadcrumbList } from "@/components/ui/breadcrumb";
import Home from "@/components/home";
import { LinkIcon, Search, Share, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b justify-between">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    dbsq.dev
                  </BreadcrumbLink>
                </BreadcrumbItem>
                /
                <BreadcrumbItem>
                  <BreadcrumbItem>2 minutes ago</BreadcrumbItem>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2 px-4">
            <Button variant={"outline"} size="icon-sm">
              <Star className="text-yellow-400 fill-yellow-400 size-3.5" />
            </Button>
            <Button variant={"outline"} size="icon-sm">
              <LinkIcon className="size-3.5" />
            </Button>
            <Button size="sm">
              <Share className="size-3.5" />
              Share
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 pt-0">
          <Home />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
