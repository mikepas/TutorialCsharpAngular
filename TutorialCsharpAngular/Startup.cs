using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TutorialCsharpAngular.Startup))]
namespace TutorialCsharpAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
