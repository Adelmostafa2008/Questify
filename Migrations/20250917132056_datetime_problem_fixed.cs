using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class datetime_problem_fixed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "25815dc4-6e85-4f9d-bf9c-1a7481b3c5dd");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3be29559-baae-40d0-94c9-544d6e94b2a3");

            migrationBuilder.AlterColumn<DateTime>(
                name: "SubmissionDate",
                table: "Submissions",
                type: "datetime(6)",
                nullable: false,
                oldClrType: typeof(DateOnly),
                oldType: "date");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "d89c5c81-a4fe-49dd-aa27-7282b15c3cbb", null, "User", "USER" },
                    { "fbc653e6-cd1b-4145-b564-8bddd3460ff8", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d89c5c81-a4fe-49dd-aa27-7282b15c3cbb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fbc653e6-cd1b-4145-b564-8bddd3460ff8");

            migrationBuilder.AlterColumn<DateOnly>(
                name: "SubmissionDate",
                table: "Submissions",
                type: "date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "25815dc4-6e85-4f9d-bf9c-1a7481b3c5dd", null, "Admin", "ADMIN" },
                    { "3be29559-baae-40d0-94c9-544d6e94b2a3", null, "User", "USER" }
                });
        }
    }
}
