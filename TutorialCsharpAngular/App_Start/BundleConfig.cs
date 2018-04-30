using System.Web.Optimization;

namespace TutorialCsharpAngular
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/TutorialCsharpAngular")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .Include("~/Scripts/TutorialCsharpAngular.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}