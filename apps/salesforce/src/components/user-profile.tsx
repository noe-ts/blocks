import { User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface UserProfileProps {
  email?: string;
  onProfileClick?: () => void;
  onLogoutClick?: () => void;
}

export function UserProfile({
  email = "user@example.com",
  onProfileClick,
  onLogoutClick,
}: UserProfileProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "size-8 rounded-[min(var(--radius-md),10px)]",
          "bg-primary/20 text-primary border border-white",
          "hover:bg-primary/20 hover:text-primary",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "inline-flex items-center justify-center text-sm font-medium",
          "transition-all disabled:pointer-events-none disabled:opacity-50",
          "outline-none select-none"
        )}
      >
        ND
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">Account</p>
              <p className="text-xs text-muted-foreground">{email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onProfileClick}>
            <User className="size-4 mr-2" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onClick={onLogoutClick}>
            <LogOut className="size-4 mr-2" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
