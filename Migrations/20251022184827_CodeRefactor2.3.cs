using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class CodeRefactor23 : Migration
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
                    { "1a680b98-77ed-4a28-95ef-a94f49cde89f", null, "Admin", "ADMIN" },
                    { "8368f63c-71a8-4afe-b747-613b66ac9414", null, "User", "USER" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Scenarios_Tasks_TaskId",
                table: "Scenarios",
                column: "TaskId",
                principalTable: "Tasks",
                principalColumn: "Id");
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
                keyValue: "1a680b98-77ed-4a28-95ef-a94f49cde89f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8368f63c-71a8-4afe-b747-613b66ac9414");

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
    }
}
