import { LogOut, User } from "lucide-react";
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
					"border border-white bg-primary/20 text-primary",
					"hover:bg-primary/20 hover:text-primary",
					"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
					"inline-flex items-center justify-center font-medium text-sm",
					"transition-all disabled:pointer-events-none disabled:opacity-50",
					"select-none outline-none",
				)}
			>
				ND
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuGroup>
					<DropdownMenuLabel>
						<div className="flex flex-col space-y-1">
							<p className="font-medium text-sm">Account</p>
							<p className="text-muted-foreground text-xs">{email}</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={onProfileClick}>
						<User className="mr-2 size-4" />
						<span>Profile</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem variant="destructive" onClick={onLogoutClick}>
						<LogOut className="mr-2 size-4" />
						<span>Logout</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
