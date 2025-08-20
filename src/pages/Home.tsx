import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Users, Award, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ahmedPortrait from "@/assets/ahmed-portrait.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/20 to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                الرياضيات تصبح{" "}
                <span className="text-primary">سهلة</span> و{" "}
                <span className="text-primary">ممتعة</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                مع الأستاذ أحمد الحلواني، اكتشف إمكاناتك في الرياضيات من خلال التدريس المخصص لطلاب المرحلة الإعدادية والثانوية.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="group text-lg px-8 py-6">
                  احجز درسك الآن
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/about">تعرف على الأستاذ</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-3xl transform -rotate-6"></div>
                <img
                  src={ahmedPortrait}
                  alt="أحمد الحلواني - مدرس الرياضيات"
                  className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              لماذا الأستاذ أحمد الحلواني؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مدرس رياضيات ذو خبرة واسعة يخدم الطلاب في مصر ودول الخليج بأساليب تدريس مُثبتة النجاح.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">منهج شامل</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  يغطي المرحلة الإعدادية والثانوية والمناهج الدولية وامتحانات SAT مع خطط دروس مخصصة.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">سجل حافل بالنجاح</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  مئات الطلاب الناجحين الذين حسنوا درجاتهم وثقتهم في الرياضيات.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">تعلم مرن</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  دروس أونلاين وحضورية متاحة لتناسب تفضيلات التعلم لكل طالب.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              خدمات تدريس الرياضيات
            </h2>
            <p className="text-xl text-muted-foreground">
              تعليم رياضيات شامل مصمم حسب مستواك الأكاديمي وأهدافك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "رياضيات إعدادي", description: "بناء أساس قوي لطلاب المرحلة الإعدادية" },
              { title: "رياضيات ثانوي", description: "مفاهيم متقدمة لطلاب المرحلة الثانوية" },
              { title: "مراجعات نهائية", description: "تحضير مكثف للامتحانات المهمة" },
              { title: "تحضير IG و SAT", description: "دعم المناهج الدولية" },
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/services">
                اعرض جميع الخدمات
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            مستعد للتفوق في الرياضيات؟
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            انضم إلى مئات الطلاب الناجحين الذين غيروا فهمهم للرياضيات من خلال التدريس المخصص.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <MessageCircle className="w-4 h-4 ml-2" />
              تواصل عبر الواتساب
            </Button>
            <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6">
              <Link to="/contact">تواصل معنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;