using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class CodeRefactor22 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Scenarios_Tasks_TaskId",
                table: "Scenarios");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1eb7efdf-834e-433b-bd1d-8e839d798a44");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f0bbc0eb-e41f-40bb-bdeb-bd3bad069cf6");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "245e380f-e2f5-48e1-b651-e4cd21bc1af0", null, "Admin", "ADMIN" },
                    { "be6ef994-8f14-4c02-8af5-5947b31b3f7c", null, "User", "USER" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Scenarios_Tasks_TaskId",
                table: "Scenarios",
                column: "TaskId",
                principalTable: "Tasks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Scenarios_Tasks_TaskId",
                table: "Scenarios");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "245e380f-e2f5-48e1-b651-e4cd21bc1af0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "be6ef994-8f14-4c02-8af5-5947b31b3f7c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1eb7efdf-834e-433b-bd1d-8e839d798a44", null, "Admin", "ADMIN" },
                    { "f0bbc0eb-e41f-40bb-bdeb-bd3bad069cf6", null, "User", "USER" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Scenarios_Tasks_TaskId",
                table: "Scenarios",
                column: "TaskId",
                principalTable: "Tasks",
                principalColumn: "Id");
        }
    }
}
