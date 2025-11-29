-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT,
    "tgId" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "referBy" TEXT,
    "referCode" TEXT NOT NULL,
    "publicKey" TEXT,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3),
    "isIntroShowed" BOOLEAN NOT NULL DEFAULT false,
    "isBlock" BOOLEAN NOT NULL DEFAULT false,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_tgId_key" ON "user"("tgId");
