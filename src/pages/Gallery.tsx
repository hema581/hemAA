import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  // Placeholder data for gallery items
  const galleryItems = [
    {
      type: "lesson",
      title: "جلسة رياضيات ثانوي",
      description: "شرح الدوال التربيعية للصف الأول الثانوي",
      category: "دروس حضورية"
    },
    {
      type: "online",
      title: "درس أونلاين - منهج IG",
      description: "جلسة تفاعلية عبر الإنترنت لطلاب المنهج الدولي",
      category: "دروس أونلاين"
    },
    {
      type: "achievement",
      title: "احتفال بالنجاح",
      description: "طالب يحصل على 95% في امتحان الرياضيات",
      category: "إنجازات الطلاب"
    },
    {
      type: "workshop",
      title: "ورشة حل المسائل",
      description: "ورشة جماعية لحل المسائل المعقدة",
      category: "ورش العمل"
    },
    {
      type: "lesson",
      title: "شرح الهندسة التحليلية",
      description: "درس في الهندسة التحليلية مع الرسوم البيانية",
      category: "دروس حضورية"
    },
    {
      type: "certificate",
      title: "شهادات التقدير",
      description: "شهادات تقدير للطلاب المتفوقين",
      category: "التقديرات"
    },
    {
      type: "group",
      title: "المجموعة الدراسية",
      description: "طلاب المرحلة الإعدادية في جلسة جماعية",
      category: "دروس جماعية"
    },
    {
      type: "tools",
      title: "أدوات التدريس",
      description: "الأدوات والوسائل المستخدمة في التدريس",
      category: "أدوات تعليمية"
    },
    {
      type: "online",
      title: "جلسة تحضير SAT",
      description: "تحضير مكثف لامتحان SAT Math عبر الإنترنت",
      category: "دروس أونلاين"
    }
  ];

  const categories = [
    "جميع الفئات",
    "دروس حضورية", 
    "دروس أونلاين",
    "إنجازات الطلاب",
    "ورش العمل",
    "التقديرات",
    "دروس جماعية",
    "أدوات تعليمية"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            معرض الصور
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            جولة بصرية في رحلة التعلم مع الأستاذ أحمد الحلواني - من الدروس التفاعلية إلى لحظات النجاح والتفوق.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant={index === 0 ? "default" : "outline"}
              className="px-4 py-2 text-base cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="relative">
                {/* Placeholder Image */}
                <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary text-2xl">📸</span>
                    </div>
                    <p className="text-muted-foreground text-lg font-medium">{item.title}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-sm">
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Snippets Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">مقاطع من الدروس</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">شرح المعادلات التربيعية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-accent/30 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary text-2xl">▶</span>
                    </div>
                    <p className="text-muted-foreground">مقطع فيديو: شرح تفصيلي للمعادلات التربيعية</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  مقطع من درس شرح المعادلات التربيعية بطريقة مبسطة وواضحة مع أمثلة تطبيقية.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">حل مسائل الهندسة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-accent/30 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary text-2xl">▶</span>
                    </div>
                    <p className="text-muted-foreground">مقطع فيديو: تقنيات حل مسائل الهندسة</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  شرح خطوات حل مسائل الهندسة المعقدة بطريقة منطقية ومنظمة.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Moments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">لحظات النجاح والتفوق</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "نتائج ممتازة", description: "طلاب يحتفلون بدرجاتهم العالية" },
              { title: "شهادات التقدير", description: "توزيع شهادات على الطلاب المتفوقين" },
              { title: "قبول جامعي", description: "طالب يحصل على قبول في جامعة مرموقة" },
              { title: "تحسن ملحوظ", description: "قبل وبعد تحسن درجات الطلاب" }
            ].map((moment, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary text-3xl">🎉</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{moment.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{moment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Behind the Scenes */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/20">
          <CardContent className="pt-0">
            <h2 className="text-3xl font-bold text-center mb-8">خلف الكواليس</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-full h-40 bg-accent/30 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-3xl">📚</span>
                </div>
                <h3 className="font-semibold mb-2 text-lg">تحضير الدروس</h3>
                <p className="text-muted-foreground leading-relaxed">
                  نظرة على كيفية تحضير وإعداد المواد التعليمية لكل درس
                </p>
              </div>
              <div className="text-center">
                <div className="w-full h-40 bg-accent/30 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-3xl">💻</span>
                </div>
                <h3 className="font-semibold mb-2 text-lg">الإعداد التقني</h3>
                <p className="text-muted-foreground leading-relaxed">
                  التجهيزات التقنية للدروس الأونلاين وضمان جودة التعليم
                </p>
              </div>
              <div className="text-center">
                <div className="w-full h-40 bg-accent/30 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-3xl">📝</span>
                </div>
                <h3 className="font-semibold mb-2 text-lg">متابعة التقدم</h3>
                <p className="text-muted-foreground leading-relaxed">
                  كيفية متابعة تقدم كل طالب وتقييم مستوى التحسن
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary text-primary-foreground">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-bold mb-4">كن جزءاً من هذه القصص!</h2>
              <p className="mb-6 opacity-90 text-lg leading-relaxed">
                انضم إلى مجتمع طلابنا المتميزين واحصل على فرصتك لتكون نجماً في معرض صور النجاح القادم.
              </p>
              <a
                href="https://wa.me/+201234567890?text=السلام عليكم أستاذ أحمد! أريد أن أكون جزءاً من قصص النجاح."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                ابدأ رحلتك معنا
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;