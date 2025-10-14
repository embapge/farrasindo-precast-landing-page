import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const BASE_DIR = path.join(process.cwd(), "src/components/images"); // folder utama penyimpanan

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const relPath = searchParams.get("path"); // ex: /logo/ciputra.webp

  if (!relPath) {
    return new NextResponse("Missing path parameter", { status: 400 });
  }

  // 🔒 Sanitasi path agar tidak bisa naik ke luar BASE_DIR
  const resolvedPath = path.join(BASE_DIR, relPath);
  const normalizedPath = path.normalize(resolvedPath);

  if (!normalizedPath.startsWith(BASE_DIR)) {
    return new NextResponse("Access denied", { status: 403 });
  }

  // Pastikan file ada
  if (!fs.existsSync(normalizedPath)) {
    return new NextResponse("File not found", { status: 404 });
  }

  // Tentukan MIME type
  const ext = path.extname(normalizedPath).toLowerCase();
  let mime = "application/octet-stream";
  if (ext === ".png") mime = "image/png";
  else if (ext === ".jpg" || ext === ".jpeg") mime = "image/jpeg";
  else if (ext === ".webp") mime = "image/webp";
  else if (ext === ".svg") mime = "image/svg+xml";

  // Baca file sebagai buffer
  const buffer = fs.readFileSync(normalizedPath);

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": mime,
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
