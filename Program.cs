using Backend.db;
using Backend.Interfaces;
using Backend.Models;
using Backend.Repos;
using Backend.Repos.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDb>(option =>
{
    option.UseMySql(builder.Configuration.GetConnectionString("connStr"),
        new MySqlServerVersion(new Version(8, 0, 43)));
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddControllers();
// builder.Services.AddScoped<IUserRepo, UserRepo>();
builder.Services.AddScoped<ITaskRepo, TaskRepo>();
builder.Services.AddScoped<IScenarioRepo, ScenarioRepo>();
builder.Services.AddScoped<ITokenGenerator, TokenGenerator>();
builder.Services.AddScoped<IUTsubmissionsRepo, UTsubmissionsRepo>();
builder.Services.AddScoped(typeof(IGenericRepo<>) , typeof(GenericRepo<>));

builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
});

builder.Services.AddIdentity<Users, IdentityRole>(op =>
{
    op.Password.RequireDigit = true;
    op.Password.RequireUppercase = true;
    op.Password.RequireLowercase = true;
    op.Password.RequiredUniqueChars = 1;
    op.Password.RequiredLength = 8;
}).AddEntityFrameworkStores<AppDb>();



builder.Services.AddAuthentication(opt =>
{
    opt.DefaultAuthenticateScheme =
    opt.DefaultChallengeScheme =
    opt.DefaultForbidScheme =
    opt.DefaultScheme =
    opt.DefaultSignInScheme =
    opt.DefaultSignOutScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(opt =>
{
    opt.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidIssuer = builder.Configuration["JWT:Issuer"],
        ValidateAudience = true,
        ValidAudience = builder.Configuration["JWT:Audience"],
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(
            System.Text.Encoding.UTF8.GetBytes(builder.Configuration["JWT:SigningKey"])
        )
    };
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials();
        });
});

var app = builder.Build();
 
app.UseHttpsRedirection();

app.UseCors("AllowReactApp");
app.UseAuthentication();
app.UseAuthorization();

app.UseStaticFiles();

app.MapControllers();

app.Run();
