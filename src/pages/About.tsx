import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Award, Clock } from "lucide-react";

const About = () => {
  const qualifications = [
    "بكالوريوس الرياضيات",
    "شهادة التدريس للمرحلة الثانوية",
    "متخصص في المناهج الدولية (IG)",
    "خبير امتحانات SAT للرياضيات"
  ];

  const teachingLevels = [
    "رياضيات إعدادي (الصف السابع - التاسع)",
    "رياضيات ثانوي (الصف العاشر - الثاني عشر)",
    "الشهادة العامة الدولية (IG)",
    "تحضير امتحان SAT للرياضيات",
    "مراجعات الامتحانات النهائية",
    "تحضير امتحانات دخول الجامعات"
  ];

  const achievements = [
    "أكثر من 15 سنة خبرة في التدريس",
    "أكثر من 500 طالب ناجح",
    "معدل تحسن الطلاب 95%",
    "يتحدث العربية والإنجليزية بطلاقة"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            عن الأستاذ أحمد الحلواني
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مُعلِم رياضيات مُتفانٍ يُحول فهم الطلاب من خلال المناهج التعليمية المخصصة والمنهجيات المُثبتة.
          </p>
        </div>

        {/* Biography Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">فلسفتي في التدريس</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                الرياضيات ليست مجرد أرقام ومعادلات - إنها تطوير للتفكير النقدي ومهارات حل المشكلات وبناء الثقة. مع أكثر من 15 سنة من الخبرة في تدريس الطلاب في مصر ودول الخليج، أؤمن أن كل طالب لديه القدرة على التفوق في الرياضيات.
              </p>
              <p className="text-lg leading-relaxed">
                نهجي يركز على فهم أسلوب التعلم الفريد لكل طالب وتكييف طرق التدريس وفقاً لذلك. أقوم بتفكيك المفاهيم المعقدة إلى خطوات قابلة للإدارة، مع التأكد من أن المعرفة الأساسية قوية قبل الانتقال إلى المواضيع المتقدمة.
              </p>
              <p className="text-lg leading-relaxed">
                سواء كان التحضير للامتحانات النهائية أو المناهج الدولية أو الرغبة في تحسين الفهم الرياضي، أقدم اهتماماً شخصياً يجعل التعلم فعالاً وممتعاً.
              </p>
            </div>
          </div>

          <Card className="p-8">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 ml-3 text-primary" />
                الإنجازات الرئيسية
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground text-lg">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Qualifications and Teaching Levels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 ml-3 text-primary" />
                المؤهلات
              </h3>
              <div className="space-y-3">
                {qualifications.map((qualification, index) => (
                  <Badge key={index} variant="secondary" className="ml-2 mb-2 text-base px-4 py-2">
                    {qualification}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Users className="w-6 h-6 ml-3 text-primary" />
                مستويات التدريس
              </h3>
              <div className="space-y-3">
                {teachingLevels.map((level, index) => (
                  <div key={index} className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground text-lg">{level}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Teaching Approach */}
        <Card className="p-8 mb-16">
          <CardContent className="pt-0">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Clock className="w-6 h-6 ml-3 text-primary" />
              منهجي في التدريس
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">١</span>
                </div>
                <h4 className="font-semibold mb-2 text-lg">التقييم</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تقييم أولي لفهم المستوى الحالي وأسلوب التعلم
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">٢</span>
                </div>
                <h4 className="font-semibold mb-2 text-lg">التخصيص</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  خطط دروس مخصصة تناسب الاحتياجات والأهداف الفردية
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">٣</span>
                </div>
                <h4 className="font-semibold mb-2 text-lg">التقدم</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  مراقبة مستمرة وتعديل لضمان التحسن المطرد
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center bg-accent/30 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            مستعد لبدء رحلتك الرياضية؟
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            دعنا نعمل معاً لإطلاق إمكاناتك في الرياضيات
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/+201234567890?text=السلام عليكم أستاذ أحمد! أريد معرفة المزيد عن خدمات التدريس."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-lg"
            >
              تواصل عبر الواتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;