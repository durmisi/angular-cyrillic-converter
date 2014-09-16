using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(angular_cyrillic_converter.Startup))]
namespace angular_cyrillic_converter
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
