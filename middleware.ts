import { NextRequest, NextResponse } from "next/server";

// Terapkan hanya untuk route tertentu
export const config = {
  matcher: ["/api/image/:path*"],
};

export function middleware(req: NextRequest) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");

  // Pastikan origin ada dan cocok dengan host
  if (origin && !origin.includes(host || "")) {
    return new NextResponse("Forbidden: invalid origin", { status: 403 });
  }

  // Jika tidak ada origin (misalnya request langsung dari browser atau server-side), tetap diizinkan
  return NextResponse.next();
}
