import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import clsx from 'clsx'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className={clsx(
        "-mx-6 rounded-4xl px-6 py-20 sm:mx-0 sm:py-32 md:px-12",
        "bg-gradient-2",
        "relative"
      )}>
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display font-medium text-white [text-wrap:balance] text-3xl sm:text-4xl">
              Tell us about your project
            </h2>

            <div className="mt-6 flex">
              <Button href="/contact" invert large>
                Say hi<span className="ml-4">👋</span>
              </Button>
            </div>

            <div className={clsx(
              "aspect-square",
              "absolute",
              "text-[8rem] sm:text-[10rem]",
              "bottom-6 sm:bottom-10",
              "right-6 sm:right-10"
            )}>
              <div className="h-full translate-y-1/2">🚀</div>
            </div>

            {/* <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our offices
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div> */}
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
