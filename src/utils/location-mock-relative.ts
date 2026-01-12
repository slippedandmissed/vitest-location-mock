import {LocationMock} from "@jedmao/location";


export class LocationMockRelative extends LocationMock implements Location {
	assign (url: string): void {
		super.assign(this.makeAbsolute(url));
	}
	replace (url: string): void {
		super.replace(this.makeAbsolute(url));
	}
	set href (url: string) {
		if (this.isAbsolute(url)) {
			super.href = url;
			return;
		}
		super.href = this.makeAbsolute(url);
	}

	private isAbsolute(url: string) {
		try {
			new URL(url);
			return true;
		}
		catch {
			return false;
		}
	}

	private makeAbsolute (url: string) {
		return new URL(url, this.origin).href;
	}
}
