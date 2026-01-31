import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import founderImg from '@/assets/founder.jpg';

export default function AboutFounder() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="founder" className="section-padding bg-background" ref={ref}>
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content Side */}
                    <motion.div
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                            Leadership
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                            Meet The Founder
                        </h2>

                        <div className="relative mb-8">
                            <Quote className="absolute -top-4 -left-4 w-12 h-12 text-accent/20 rotate-180" />
                            <p className="text-xl text-foreground font-medium italic relative z-10 pl-6">
                                "Our mission has always been simple: to build homes that we would be proud to live in ourselves. Quality, integrity, and client trust are the pillars of everything we do."
                            </p>
                        </div>

                        <p className="text-muted-foreground mb-6">
                            With over 25 years of hands-on experience in the Australian construction industry,
                            J.N. has led Triple J Homes from a small family operation to one of the region's
                            most respected builders.
                        </p>
                        <p className="text-muted-foreground mb-8">
                            His hands-on approach involves personal supervision of every major project, ensuring
                            that the company's high standards are maintained from the foundation to the final
                            coat of paint.
                        </p>

                        <div className="flex items-center gap-4">
                            <div>
                                <h4 className="font-heading font-bold text-lg text-foreground">J.N. (Van)</h4>
                                <p className="text-accent text-sm font-medium">Founder & Managing Director</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        className="order-1 lg:order-2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-custom-xl aspect-[3/4] max-w-md mx-auto">
                            {/* Founder Image */}
                            <img
                                src={founderImg}
                                alt="Founder of Triple J Homes"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
