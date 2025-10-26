import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import lecture1 from "@/assets/lecture-1.jpg";
import lecture2 from "@/assets/lecture-2.jpg";
import lecture3 from "@/assets/lecture-3.jpg";
import lecture4 from "@/assets/lecture-4.jpg";
import lecture5 from "@/assets/lecture-5.jpg";

const Index = () => {
  const schedule = [
    { week: 1, theme: "Light", speakers: ["Dr. Sarah Chen - 'Photons & Philosophy'", "Marcus Williams - 'Illuminating Darkness'"] },
    { week: 2, theme: "God", speakers: ["Rev. James Park - 'Faith in Modern Times'", "Prof. Aisha Rahman - 'Secular Spirituality'"] },
    { week: 3, theme: "Machines", speakers: ["Dr. Kevin Zhang - 'AI & Consciousness'", "Emma Rodriguez - 'Cyborg Futures'"] },
    { week: 4, theme: "The Erotic", speakers: ["Prof. Isabella Cruz - 'Desire & Society'", "Alex Thompson - 'Art of Intimacy'"] },
    { week: 5, theme: "Memory", speakers: ["Dr. Rachel Goldman - 'Neuroscience of Nostalgia'", "David Kim - 'Collective Memory'"] },
    { week: 6, theme: "Violence", speakers: ["Prof. Michael O'Brien - 'Ethics of Conflict'", "Sophia Patel - 'Nonviolent Resistance'"] },
    { week: 7, theme: "Beauty", speakers: ["Dr. Yuki Tanaka - 'Aesthetics Across Cultures'", "Jordan Lee - 'Ugly Beauty'"] },
    { week: 8, theme: "Time", speakers: ["Prof. Elena Volkov - 'Temporal Paradoxes'", "Chris Anderson - 'Living in the Present'"] },
    { week: 9, theme: "Power", speakers: ["Dr. Omar Hassan - 'Structures of Authority'", "Maya Johnson - 'Empowerment & Change'"] },
    { week: 10, theme: "Mystery", speakers: ["Prof. Luna Martinez - 'The Unknown Unknown'", "Sam Foster - 'Embracing Uncertainty'"] },
  ];

  const photos = [lecture1, lecture2, lecture3, lecture4, lecture5, lecture1, lecture2];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float">
            STANFORD DORM LECTURES
          </h1>
          <div className="inline-block bg-card/90 backdrop-blur-sm px-8 py-4 rounded-3xl shadow-lg border-4 border-primary rotate-1 hover:rotate-0 transition-transform duration-300">
            <p className="text-xl md:text-2xl font-bold text-foreground">
              Every Sunday Night • Faizan Lounge • Florence Moore
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary/10 border-4 border-accent shadow-[8px_8px_0px_0px_hsl(var(--primary))] hover:shadow-[12px_12px_0px_0px_hsl(var(--primary))] transition-all duration-300">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-primary">What We're About</h2>
          <div className="space-y-4 text-lg">
            <p className="text-foreground/90 leading-relaxed">
              Stanford Dorm Lectures is a student-run intellectual community that transforms Sunday evenings into spaces for deep thinking, wild ideas, and genuine conversation. We gather in Faizan Lounge to explore life's biggest questions through the lens of weekly themes that matter.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Our mission is simple: create a space where curiosity thrives, where undergraduate and graduate students can present their passions, research, and provocative ideas in an intimate setting. No stuffy formality—just authentic intellectual exchange over snacks and good company.
            </p>
            <div className="inline-block mt-4 bg-secondary/30 px-6 py-3 rounded-full border-2 border-secondary">
              <p className="font-bold text-foreground">🧠 Think deeply. 💬 Speak freely. 🤝 Connect genuinely.</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-primary mb-4 inline-block border-b-8 border-secondary pb-2">
            WINTER QUARTER 2025
          </h2>
          <p className="text-xl text-muted-foreground mt-4">10 weeks • 10 themes • countless insights</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {schedule.map((item) => (
            <Card
              key={item.week}
              className="p-6 bg-card border-4 border-primary hover:border-accent transition-colors duration-300 hover:scale-105 transform transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg rotate-3 hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl font-black text-primary-foreground">{item.week}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-foreground mb-3 uppercase tracking-wide">{item.theme}</h3>
                  <ul className="space-y-2">
                    {item.speakers.map((speaker, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2 text-accent font-bold">→</span>
                        <span>{speaker}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-secondary mb-2 inline-block transform -rotate-2">
            FAQ
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-4 border-primary rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-xl font-bold text-foreground hover:text-primary">
              What makes a good lecture?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-3 pt-4">
              <p className="leading-relaxed">
                A great Dorm Lecture isn't about being the perfect public speaker—it's about sharing something you genuinely care about. The best talks come from personal passion, whether that's your research, a philosophical question that keeps you up at night, or a cultural phenomenon you can't stop thinking about.
              </p>
              <p className="leading-relaxed">
                <strong>Key ingredients:</strong> Authenticity over polish. Ideas over credentials. Conversation over monologue. We love talks that make us think differently, that challenge our assumptions, or that open doors to new ways of seeing the world. Aim for 20-30 minutes with time for Q&A.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-4 border-accent rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-xl font-bold text-foreground hover:text-accent">
              Who can attend?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-4">
              Anyone from the Stanford community! We welcome undergrads, grad students, and anyone curious enough to show up. Come for the ideas, stay for the snacks and conversations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-4 border-secondary rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-xl font-bold text-foreground hover:text-secondary">
              How do I give a lecture?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-4">
              Reach out to our organizing team! We're always looking for passionate speakers. Whether you want to present your thesis research, share a wild theory, or lead a discussion on a theme that fascinates you—we'd love to hear from you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-4 border-primary rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-xl font-bold text-foreground hover:text-primary">
              What's the vibe like?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-4">
              Think cozy, informal, and intellectually electric. Picture this: dimmed lights, students sprawled on couches and sitting on the floor, snacks being passed around, and ideas flowing freely. It's TED Talk meets late-night dorm conversation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4 md:px-8 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-accent mb-2 inline-block transform rotate-2">
            MEMORIES
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-slide-left hover:[animation-play-state:paused]">
            {[...photos, ...photos].map((photo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[400px] h-[300px] rounded-3xl overflow-hidden border-4 border-foreground shadow-lg hover:scale-105 transition-transform duration-300 hover:border-primary"
              >
                <img
                  src={photo}
                  alt={`Lecture memory ${(idx % photos.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center bg-gradient-to-t from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-bold text-foreground mb-2">📍 Faizan Lounge, Florence Moore Hall</p>
          <p className="text-lg font-bold text-foreground mb-6">⏰ Every Sunday, 7:00 PM</p>
          <p className="text-muted-foreground">
            A student-run lecture series at Stanford University
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
