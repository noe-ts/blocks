import { User, LogOut, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
      <DropdownMenuTrigger>
        <Button size="icon-sm" variant="outline" className="bg-primary/20 text-primary border-white hover:bg-primary/20 hover:text-primary">
          ND
        </Button>
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
